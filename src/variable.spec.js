import React from 'react';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import chaiEnzyme from 'chai-enzyme';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Variable} from './Variable';
import {v4 as uuidv4} from 'uuid';

Enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());


describe('Variable', () => {
    it.only('should render correctly', ()=>{
        const uuid = 'df2e2731-f0a4-41d6-a405-5e898998a441';
        const functionSpys = { 
            onPopulationChange: sinon.spy(),
            onNameChange: sinon.spy(),
            onSuccessesChange: sinon.spy(),
            onRemove: sinon.spy()
        };
        const variableDetails = {
            population: 0,
            successes: 0,
            name: 'test',
            uuid: uuid
        };
        const myVariable = shallow(<Variable variable={variableDetails} {...functionSpys}/>);
        expect(myVariable.find('header')).to.have.length(1);
    });
});