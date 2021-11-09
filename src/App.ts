import express, { Express } from 'express';
import cors       from 'cors';
import dotenv     from 'dotenv';

import Actuator from './config/Actuator';
import Morgan   from './config/Morgan';

const { config } = dotenv;

import routes     from './Routes';
import { Container } from 'typedi';

class App {
    express: Express;
    
    constructor() {
        config();
        this.express = express();
        this.services()
        this.middlewares();
    }
    
    services(){
        const morganInstance = Container.get(Morgan)
        this.express.use(morganInstance.getInstance());
    }
    
    middlewares(){
        this.express.use(Actuator)
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(cors());
        this.express.use('/', routes);
    }
}

export default new App().express;