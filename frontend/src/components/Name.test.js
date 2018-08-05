import React from 'react';
import { mount } from 'enzyme';
import Name from './Name';

describe('Name', () => {
  it ('creates an input with name ABC and enabled submit button', () => {
    const name = 'ABC';
    const setName = () => {};
    const postName = () => {};
    const wrapper = mount(
      <Name
      name={name}
      setName={setName}
      postName={postName} />
    );
    expect(wrapper.find('[value="ABC"]').length).toEqual(1);
    expect(wrapper.find('[disabled=false]').length).toEqual(1);
    wrapper.unmount();
  });

  it ('creates an input with no name and disabled submit button', () => {
    const name = '';
    const setName = () => {};
    const postName = () => {};
    const wrapper = mount(
      <Name
      name={name}
      setName={setName}
      postName={postName} />
    );
    expect(wrapper.find('[value=""]').length).toEqual(1);
    expect(wrapper.find('[disabled=true]').length).toEqual(1);
    wrapper.unmount();
  });

  it ('posts name on submit', () => {
    const name = 'ABC';
    const setName = () => {};
    const postName = jest.fn();
    const wrapper = mount(
      <Name
      name={name}
      setName={setName}
      postName={postName} />
    );
    wrapper.find('[type="submit"]').simulate('click');
    expect(postName.mock.calls.length).toBe(1);
    wrapper.unmount();
  });

  it ('sets name on change input', () => {
    const name = 'ABC';
    const setName = jest.fn();
    const wrapper = mount(
      <Name
      name={name}
      setName={setName} />
    );
    wrapper.find('[type="text"]').simulate('change');
    expect(setName.mock.calls.length).toBe(1);
    wrapper.unmount();
  });
});