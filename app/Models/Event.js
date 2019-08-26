'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {

  logs() {
    return this.hasMany('App/Models/EventLog')
  }
}

module.exports = Event