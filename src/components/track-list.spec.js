import TrackList from './track-list';
import { shallow } from 'enzyme';

describe('TrackList', () => {
  const props = {
    tracks: [{ title: 'x' }, { title: 'y' }, { title: 'z' }],
  };

  it('shows three elements', () => {
    const element = shallow(<TrackList { ...props } />);

    expect(element.find('.track')).to.have.length(2);
  });
});
