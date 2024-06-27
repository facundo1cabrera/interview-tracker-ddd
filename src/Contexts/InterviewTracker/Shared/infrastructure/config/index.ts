import convict from 'convict';

const interviewTrackerConfig = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'staging', 'test'],
    default: 'default',
    env: 'NODE_ENV'
  },
  mongo: {
    url: {
      doc: 'The Mongo connection URL',
      format: String,
      env: 'MONGO_URL',
      default: 'mongodb://localhost:27017/interviewTracker-backend-dev'
    }
  }
});

interviewTrackerConfig.loadFile([__dirname + '/default.json', __dirname + '/' + interviewTrackerConfig.get('env') + '.json']);

export default interviewTrackerConfig;