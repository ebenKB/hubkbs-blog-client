import Route from '@ember/routing/route';

export default Route.extend({
  model({token}){
    return token;
  }
});
