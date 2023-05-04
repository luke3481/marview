from datashader.tiles import render_tiles
import pandas as pd
import numpy as np
import datashader as ds
import datashader.transfer_functions as tf
from colorcet import bmw, coolwarm, fire, CET_L18
from PIL import ImageDraw

def read_AIS():
    df = pd.read_csv('AIS.csv')
    return df

def load_data_func(x_range, y_range):
    global df
    return df

def rasterize_func(df, x_range, y_range, height, width):
    cvs = ds.Canvas(x_range=x_range, y_range=y_range, plot_height=height, plot_width=width)
    agg = cvs.points(df, 'x', 'y')
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

    # full_extent_of_data = (-500000, -500000, 500000, 500000)
    full_extent_of_data = (-20037508.34, -20037508.34, 20037508.34, 20037508.34)

    df = read_AIS()
    output_path = 'tiles'
    
    render_tiles(full_extent_of_data,
                       levels=range(12),
                       load_data_func=load_data_func,
                       rasterize_func=rasterize_func,
                       shader_func=shader_func,
                       post_render_func=post_render_func,
                       output_path=output_path)