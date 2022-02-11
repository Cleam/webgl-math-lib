export default class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
  x: number;
  y: number;
  z: number;
  // 设置各个分量
  setX(x: number) {
    this.x = x;
    return this;
  }
  setY(y: number) {
    this.y = y;
    return this;
  }
  setZ(z: number) {
    this.z = z;
    return this;
  }
  // 归一化向量
  normalize() {
    const { x, y, z } = this;
    // 首先求出向量的长度（模）
    const len = Math.sqrt(x * x + y * y + z * z);
    // 然后将各个分量除以模
    if (len > 0) {
      this.x /= len;
      this.y /= len;
      this.z /= len;
    }
    return this;
  }
  // 向量相加
  addVectors(vec1: Vector3, vec2: Vector3) {
    this.x = vec1.x + vec2.x;
    this.y = vec1.y + vec2.y;
    this.z = vec1.z + vec2.z;
    return this;
  }
  add(vec1: Vector3, vec2: Vector3) {
    if (vec2) {
      return this.addVectors(vec1, vec2);
    }
    this.x += vec1.x;
    this.y += vec1.y;
    this.z += vec1.z;
    return this;
  }
  // 向量相减
  sub(vec1: Vector3, vec2: Vector3) {
    if (vec2) {
      // 如果有第二个向量，则相减
      return this.addVectors(vec1, vec2.multiplyScalar(-1));
    }
    this.x -= vec1.x;
    this.y -= vec1.y;
    this.z -= vec1.z;
    return this;
  }
  // 乘以一个标量
  multiplyScalar(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }
  // 向量相乘
  multiplyVector(vec1: Vector3, vec2: Vector3) {
    this.x = vec1.x * vec2.x;
    this.y = vec1.y * vec2.y;
    this.z = vec1.z * vec2.z;
    return this;
  }
  multiply(vec1: Vector3, vec2: Vector3) {
    if (vec2) {
      // 如果有第二个向量，则相乘
      return this.multiplyVector(vec1, vec2);
    }
    this.x *= vec1.x;
    this.y *= vec1.y;
    this.z *= vec1.z;
    return this;
  }
  // 向量相除
  divideVector(vec1: Vector3, vec2: Vector3) {
    this.x = vec1.x / vec2.x;
    this.y = vec1.y / vec2.y;
    this.z = vec1.z / vec2.z;
    return this;
  }
  divide(vec1: Vector3, vec2: Vector3) {
    if (vec2) {
      // 如果有第二个向量，则相除
      return this.divideVector(vec1, vec2);
    }
    this.x /= vec1.x;
    this.y /= vec1.y;
    this.z /= vec1.z;
    return this;
  }
  // 向量点乘
  static dot(vec1: Vector3, vec2: Vector3) {
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
  }
  // 向量叉乘
  static cross(vec1: Vector3, vec2: Vector3) {
    const { x: x1, y: y1, z: z1 } = vec1;
    const { x: x2, y: y2, z: z2 } = vec2;
    const x = y1 * z2 - y2 * z1;
    const y = x2 * z1 - x1 * z2;
    const z = x1 * y2 - x2 * y1;
    return new Vector3(x, y, z);
  }
  // 初始化 4 阶单位矩阵
  // 1 0 0 0
  // 0 1 0 0
  // 0 0 1 0
  // 0 0 0 1
  static identity(target?: Float32Array) {
    target = target || new Float32Array(16);
    // 第一列
    target[0] = 1;
    target[1] = 0;
    target[2] = 0;
    target[3] = 0;
    // 第二列
    target[4] = 0;
    target[5] = 1;
    target[6] = 0;
    target[7] = 0;
    // 第三列
    target[8] = 0;
    target[9] = 0;
    target[10] = 1;
    target[11] = 0;
    // 第四列
    target[12] = 0;
    target[13] = 0;
    target[14] = 0;
    target[15] = 1;
    return target;
  }
  // 另一种实现方式
  // static identity() {
  //   // prettier-ignore
  //   const m = [
  //     1, 0, 0, 0, // 第一列
  //     0, 1, 0, 0, // 第二列
  //     0, 0, 1, 0, // 第三列
  //     0, 0, 0, 1  // 第四列
  //   ]
  //   return new Float32Array(m);
  // }
}
