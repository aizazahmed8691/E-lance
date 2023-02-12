import mongoose from "mongoose";
import dotenv from 'dotenv';
import Profile from './models/profileModel.js';
import User from './models/userModel.js';
import Gig from './models/gigsModel.js';
import connectDB from './config/db.js';

dotenv.config()

connectDB