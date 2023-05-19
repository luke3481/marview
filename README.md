# Marview

This repository is the source code for marview.ai.

## Overview

The repository contains code for the website, live map, and heat map.

### Website

The website is build using react hooks, with the styled-components framework for styling. We use Auth0 for user authentication and management and formspark for our contact form.

### Live Map

The live map is built on the react-leaflet library. The base tile-layers are all public. The weather overlays use openweathermap.org's free tile server. The AIS overlay is marinetraffic.com's free tile server. The radar (demo) overlay was generated using files in the "backend" folder to demonstrate future functionality of the product.

### Heat Map

The Heat Map is also built on the react-leaflet library, using a public tile-layer as its base layer. The monthly tile layers were generated from:

#### 1. Collating daily AIS point data from marinecadastre.gov into monthly parquet files (after cleaning the data).

#### 2. Running create_tiles.py to generate a unique tile server for each month. Each incremental zoom level requires ~4x the tiles and storage. For now, the tile servers are stored in the public folder.
