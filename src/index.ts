import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
import Book from "../models/book"
import 'dotenv/config'

const MONGODB = process.env.MONGO_URL
