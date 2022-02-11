import wml from '../src/webgl-math-lib';
const { Vector3 } = wml;

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('Vector3 constructor is ok', () => {
    const vec = new Vector3(1, 2, 3);
    expect(vec.x).toBe(1);
    expect(vec.y).toBe(2);
    expect(vec.z).toBe(3);
  });

  it('Vector3 method setX is ok', () => {
    const vec = new Vector3(1, 2, 3);
    vec.setX(4);
    expect(vec.x).toBe(4);
    vec.setY(5);
    expect(vec.y).toBe(5);
    vec.setZ(6);
    expect(vec.z).toBe(6);
  });
});
