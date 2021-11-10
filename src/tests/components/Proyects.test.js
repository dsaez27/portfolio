
import { shallow } from 'enzyme';
import { Proyects } from './../../components/Proyects';
describe('Pruebas en <Proyects />', () => {
    test('debe de funcionar correctamente', () => {
        const wrapper = shallow(<Proyects />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
