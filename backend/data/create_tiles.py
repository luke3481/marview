from datashader.tiles import render_tiles
import pandas as pd
import numpy as np
import datashader as ds
import datashader.transfer_functions as tf
from colorcet import bmw, coolwarm, fire, CET_L18
from PIL import ImageDraw
import dask.dataframe

def read_AIS():
    df = pd.read_parquet('AIS_2022_09.parquet.brotli', engine='fastparquet')
    return df

def load_data_func(x_range, y_range):
    global df
    return df

def rasterize_func(df, x_range, y_range, height, width):
    filtered_df = df.dropna(subset=['x', 'y']) 
    cvs = ds.Canvas(x_range=x_range, y_range=y_range, plot_height=height, plot_width=width)
    agg = cvs.points(filtered_df, 'x', 'y')
    return agg

def shader_func(agg, span=None):
    img = tf.shade(agg, cmap=CET_L18, how='log')
    img = tf.set_background(img, None)
    return img

def post_render_func(img, **kwargs):
    draw = ImageDraw.Draw(img)
    draw.text((5, 5), '', fill='rgb(255, 255, 255)')
    return img

if __name__ == "__main__":
    global df

    # # create tiles for full map
    # full_extent_of_data = (-20037508.34, -20037508.34, 20037508.34, 20037508.34)

    # # create tiles for marine cadastre area
    full_extent_of_data = (-19342849, 1086017, -6193232, 6582146)

    df = read_AIS()
    output_path = '../../public/tiles_sep_test'
    
    render_tiles(full_extent_of_data,
                       levels=[2],
                       load_data_func=load_data_func,
                       rasterize_func=rasterize_func,
                       shader_func=shader_func,
                       post_render_func=post_render_func,
                       output_path=output_path)