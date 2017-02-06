'use strict';

var BaseModel = require('model-toolkit').BaseModel;
var MachineType = require("../../master/machine-type");
var MonitoringSpecificationMachineItem= require("./monitoring-specification-machine-item");
var map = require('../../map');


module.exports = class MonitoringSpecificationMachine extends BaseModel {
    constructor(source, type) {
        super(type || map.production.finishingPrinting.type.MonitoringSpecificationMachine, '1.0.0');

        // Define properties.
        this.code = "";
        this.date = new Date();

        this.time = "";

        this.machineTypeId = {};
        this.machineType = new MachineType();
        this.items = [];

        this.copy(source);

        this.items = (this.items || []).map(item => new MonitoringSpecificationMachineItem(item));
    }
};