import * as dat from "dat.gui";
import Two from 'https://cdn.skypack.dev/two.js@latest';
// import Two from 'two.js';

const parameters = {
    fullscreen: true
}
const element = document.body;
const two = new Two(parameters).appendTo(element)

// Dimensions
const dimensions = {
    height: 100,
    width: 200,
}
// Styles
const StoreyStyle = {
    fill: '#ff8000',
    stroke: 'orangered',
    linewidth: 5,
    opacity: 0.75
}
const SpaceStyle = {
    fill: '#00c8ff',
    opacity: 0.75
}
const EmptyStyle = {
    fill: '#ffffff',
    stroke: '#ff0000',
    opacity: 0.2
}

// Data
class Data {
    constructor (tenant, facility, buildingStorey, space, area, period){
        this.Tenant = tenant,
        this.Facility = facility, 
        this.BuildingStorey = buildingStorey,
        this.Space = space,
        this.Area = area,
        this.Period = period
        this.Form = two.makeRoundedRectangle(0, 0, dimensions.width, dimensions.height)
        this.Text = two.makeText(
            `${tenant}
            ${area}`
        )
    }
}

// Position
class Position {
    constructor (x, y){
        this.x = x;
        this.y = y
    }
}
// RectForm
class Rectangular {
    constructor (w, h, s){
        this.w = w
        this.h = h
        this.s = s
    }
}

// Facility
class Facility {
    constructor (name){
        this.name = name
    }
    position (x, y) {
        this.position = new Position(x, y)
    }
    form (w, h, s) {
        this.form = new Rectangular(w, h, s)
    }
}

// Building storey
class BuildingStorey extends Element {
    constructor (x, y, w, h){
        super(x, y)
        this.w = w
        this.h = h
    }
}

// Space
class Space {
    constructor (facility, buildingStorey, tenant, period){
        this.facility = facility
        this.buildingStorey = buildingStorey
        this.tenant = tenant
        this.period = period
    }
    position (x, y) { this.position = new Position(x, y) }
    form (w, h, s) { this.form = new Rectangular(w, h, s) }
}

// Make circle
const r = 50;
// let x = two.width / 2;
// let y = two.height / 2 - r * 1.25;
const circle = two.makeCircle(0, 0, r);

// Make rect
//y = two.height / 2 + r * 1.25;
let wd = 100;
let ht = 100;
// const rect = two.makeRectangle(x, y, wd, ht);
const rrect = two.makeRoundedRectangle(0, 0, wd, ht, 30);

// Color
circle.fill = '#ff8000';
circle.stroke = 'orangered';
circle.linewidth = 5;

rrect.fill = '#00c8ff';
rrect.opacity = 0.75;
rrect.noStroke();

const stories = ['KG', 'EG', 'O1', 'O2', 'O3', 'DG']
const facilities = ['Vorderhaus', 'Hinterhaus']
const tenants = ['Dorea', 'Mimeo', 'BIMA', 'Schöne Welt GmbH', 'Littala GmbH']

const data = new Data('Dorea', 'Vorderhaus', 'EG', 'Büro', '150.0 m²')
data.Form.fill = '#00c8ff';
data.Form.opacity = 0.75;

const l = 800;
const h = 200;

const length = l * 4;
const height = h * 5;

const text = two.makeText('test text', 0, 0)
text.size = 20;

const group = two.makeGroup([data.Form, data.Text])

group.translation.x = two.width/2;
group.translation.y = two.height/2;

two.update();

const gui = new dat.GUI()