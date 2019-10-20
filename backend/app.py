import numpy as np
import pandas as pd
import numpy as np
import scipy.constants as consts
import matplotlib.pyplot as plt
from sklearn.cluster import DBSCAN, KMeans, OPTICS
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import IsolationForest
from sklearn import metrics
from pathlib import Path
from flask import request, abort, jsonify
from flask import Flask

def mass_to_luminosity(mass):
  return mass * 3.9e26

def habitable_zone_radius(luminosity, water_temp):
  return np.sqrt(luminosity / (16 * np.pi * consts.sigma * water_temp ** 4)) / 1.496e11

def min_habitable_zone_radius(luminosity):
  return habitable_zone_radius(luminosity, 373)

def max_habitable_zone_radius(luminosity):
  return habitable_zone_radius(luminosity, 273)

def avg_planet_temp(distance, luminosity):
  return (luminosity / (16 * np.pi * consts.sigma * distance ** 2)) ** 0.25

def avg_planet_temp_celcius(distance, luminosity):
  return avg_planet_temp(distance, luminosity) - 273.15

def min_heat_flux(teff):
  return (6.19e-9 * teff ** 2) - (1.319e-5 * teff) + 0.234

def max_heat_flux(teff):
  return (4.19e-8 * teff ** 2) - (2.139e-4 * teff) + 1.268

def min_habitable_zone_radius_atm(luminosity, teff):
  return np.sqrt(luminosity / max_heat_flux(teff))

def max_habitable_zone_radius_atm(luminosity, teff):
  return np.sqrt(luminosity / min_heat_flux(teff))

app = Flask(__name__)

@app.route('/ekosfera', methods=['GET'])
def habitable_zone():
    if not request.json:
        abort(400)
    planet = request.json
    luminosity = mass_to_luminosity(planet['star_mass'])
    distance = planet['distance']
    teff = planet['star_teff']
    res = {
        'min_habitable_zone_radius': min_habitable_zone_radius(luminosity),
        'max_habitable_zone_radius': max_habitable_zone_radius(luminosity),
        'avg_planet_temp': avg_planet_temp(distance, luminosity),
        'min_habitable_zone_radius_atm': min_habitable_zone_radius_atm(luminosity, teff),
        'max_habitable_zone_radius_atm': max_habitable_zone_radius_atm(luminosity, teff)
    }
    return jsonify(res), 200

@app.route('planets', method=['GET'])
def planets:
    return 'Hello'