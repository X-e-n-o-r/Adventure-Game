import { TypeAnimation } from 'react-type-animation';

const TextOutput = () => {
  return (
    <TypeAnimation
      sequence={[
        'You awaken in the crew quarters, hanging halfway off your miserable bed and feeling the damp in your bones. Your head throbs with a host of strange images and regrets. Though you cannot remember last night, you have every reason to expect you went about your normal business and spent your off hours carving one of your sculptures.'
        ]}
      wrapper="span"
      cursor={false}
      speed={60}
    />
  );
};

export default TextOutput;