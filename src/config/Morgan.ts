import morgan     from 'morgan';
import { Inject, Service } from 'typedi';
import InfluxService from '../service/InfluxService';

@Service()
class Morgan {
    
    @Inject()
    _influx!: InfluxService;
    
    getInstance(){
        return morgan( (tokens, req, res) => {
            
            this._influx.write('statusCode', res.statusCode );
            this._influx.write('path', req.url );
            
            return [
                tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req, res),
                tokens.res(req, res, 'content-length'), '-',
                tokens['response-time'](req, res), 'ms'
            ].join(' ')
        }).bind(this);
    }
} 
    

export default Morgan;
