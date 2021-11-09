import actuator, { Options }   from 'express-actuator';

const options : Options = {
    basePath: '/actuator', // It will set /management/info instead of /info
    infoGitMode: 'simple', // the amount of git information you want to expose, 'simple' or 'full'
    customEndpoints: [] // array of custom endpoints
};

const Actuator = actuator(options)

export default Actuator;
