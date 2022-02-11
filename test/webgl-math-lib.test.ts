import wml from '../src/webgl-math-lib';
const { Vector3 } = wml;

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('Vector3 constructor is ok', () => {
    const vec1 = new Vector3(1, 2, 3);
    expect(vec1.x).toBe(1);
    expect(vec1.y).toBe(2);
    expect(vec1.z).toBe(3);

    const vec2 = new Vector3();
    expect(vec2.x).toBe(0);
    expect(vec2.y).toBe(0);
    expect(vec2.z).toBe(0);
  });

  it('Vector3 method setX/Y/Z is ok', () => {
    const vec = new Vector3(1, 2, 3);
    vec
      .setX(4)
      .setY(5)
      .setZ(6);
    expect(vec.x).toBe(4);
    expect(vec.y).toBe(5);
    expect(vec.z).toBe(6);
  });
});
