export default class Matrix4 {
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

  /**
   * 初始化4x4矩阵（四阶方阵）
   * @param source 源数组，包含16个元素。
   * @param target 目标数组，将目标数组初始化成source对应的元素。
   * @returns
   * 如果source 不为空，返回该数组对应的强类型数组矩阵。
   * 如果 source 为空，返回单位矩阵
   */
  static initialize(source?: Float32Array, target?: Float32Array) {
    if (source) {
      if (target) {
        for (let i = 0; i < source.length; i++) {
          target[i] = source[i];
        }
        return target;
      }
      return new Float32Array(source);
    }
    return Matrix4.identity(source);
  }

  /**
   * 矩阵和矩阵相加（相加的两个矩阵的行列必须相同。）
   * @param m1 操作符左边矩阵。
   * @param m2 操作符右边矩阵。
   * @param target 将结果存入 target 数组。
   * @returns 返回相加后的新矩阵。
   */
  static add(m1: Float32Array, m2: Float32Array, target?: Float32Array) {
    target = target || new Float32Array(16);
    for (let i = 0; i < m1.length; i++) {
      target[i] = m1[i] + m2[i];
    }
    return target;
  }
  /**
   * 矩阵和矩阵相减（相减的两个矩阵的行列必须相同。）
   * @param m1 操作符左边矩阵。
   * @param m2 操作符右边矩阵。
   * @param target 将结果存入 target 数组。
   * @returns 返回相减后的新矩阵。
   */
  static sub(m1: Float32Array, m2: Float32Array, target?: Float32Array) {
    target = target || new Float32Array(16);
    for (let i = 0; i < m1.length; i++) {
      target[i] = m1[i] - m2[i];
    }
    return target;
  }

  static multiply(next: Float32Array, prev: Float32Array, target?: Float32Array) {
    target = target || new Float32Array(16);
    // 第一列
    const p00 = prev[0];
    const p10 = prev[1];
    const p20 = prev[2];
    const p30 = prev[3];
    // 第二列
    const p01 = prev[4];
    const p11 = prev[5];
    const p21 = prev[6];
    const p31 = prev[7];
    // 第三列
    const p02 = prev[8];
    const p12 = prev[9];
    const p22 = prev[10];
    const p32 = prev[11];

    // 第四列
    const p03 = prev[12];
    const p13 = prev[13];
    const p23 = prev[14];
    const p33 = prev[15];

    // 第一行
    const n00 = next[0];
    const n01 = next[4];
    const n02 = next[8];
    const n03 = next[12];
    // 第二行
    const n10 = next[1];
    const n11 = next[5];
    const n12 = next[9];
    const n13 = next[13];
    // 第三行
    const n20 = next[2];
    const n21 = next[6];
    const n22 = next[10];
    const n23 = next[14];

    // 第四行
    const n30 = next[3];
    const n31 = next[7];
    const n32 = next[11];
    const n33 = next[15];

    target[0] = p00 * n00 + p10 * n01 + p20 * n02 + p30 * n03;
    target[1] = p00 * n10 + p10 * n11 + p20 * n12 + p30 * n13;
    target[2] = p00 * n20 + p10 * n21 + p20 * n22 + p30 * n23;
    target[3] = p00 * n30 + p10 * n31 + p20 * n32 + p30 * n33;

    target[4] = p01 * n00 + p11 * n01 + p21 * n02 + p31 * n03;
    target[5] = p01 * n10 + p11 * n11 + p21 * n12 + p31 * n13;
    target[6] = p01 * n20 + p11 * n21 + p21 * n22 + p31 * n23;
    target[7] = p01 * n30 + p11 * n31 + p21 * n32 + p31 * n33;

    target[8] = p02 * n00 + p12 * n01 + p22 * n02 + p32 * n03;
    target[9] = p02 * n10 + p12 * n11 + p22 * n12 + p32 * n13;
    target[10] = p02 * n20 + p12 * n21 + p22 * n22 + p32 * n23;
    target[11] = p02 * n30 + p12 * n31 + p22 * n32 + p32 * n33;

    target[12] = p03 * n00 + p13 * n01 + p23 * n02 + p33 * n03;
    target[13] = p03 * n10 + p13 * n11 + p23 * n12 + p33 * n13;
    target[14] = p03 * n20 + p13 * n21 + p23 * n22 + p33 * n23;
    target[15] = p03 * n30 + p13 * n31 + p23 * n32 + p33 * n33;

    return target;
  }
  /**
   * 矩阵和标量相乘
   * @param m 矩阵。
   * @param scalar 标量
   * @returns 新的矩阵
   */
  static multiplyScalar(m: Float32Array, scalar: number) {
    if (scalar === 1) {
      return m;
    }
    for (let i = 0; i < m.length; i++) {
      m[i] *= scalar;
    }
    return m;
  }
  /**
   * 转置矩阵：将矩阵的行列转换为列行。
   * @param m 矩阵。
   * @param target 接收转置矩阵
   * @returns 转置矩阵
   */
  static transpose(m: Float32Array, target?: Float32Array) {
    target = target || new Float32Array(16);
    // 第一列
    target[0] = m[0];
    target[1] = m[4];
    target[2] = m[8];
    target[3] = m[12];
    // 第二列
    target[4] = m[1];
    target[5] = m[5];
    target[6] = m[9];
    target[7] = m[13];
    // 第三列
    target[8] = m[2];
    target[9] = m[6];
    target[10] = m[10];
    target[11] = m[14];
    // 第四列
    target[12] = m[3];
    target[13] = m[7];
    target[14] = m[11];
    target[15] = m[15];
    return target;
  }

  /**
   * 计算行列式、余子式矩阵、代数余子式矩阵
   * @param m 目标矩阵
   * @param cofactor 可选 接收余子式矩阵
   * @returns
   * {
   *  cofactor: 余子式矩阵
   *  algebraicCofactor: 代数余子式矩阵
   *  determinant: 矩阵行列式
   * }
   */
  static det(m: Float32Array, cofactor?: Float32Array) {
    cofactor = cofactor || new Float32Array(16);
    // 第一列
    const p00 = m[0];
    const p01 = m[1];
    const p02 = m[2];
    const p03 = m[3];

    // 第二列
    const p10 = m[4];
    const p11 = m[5];
    const p12 = m[6];
    const p13 = m[7];

    // 第三列
    const p20 = m[8];
    const p21 = m[9];
    const p22 = m[10];
    const p23 = m[11];

    // 第四列
    const p30 = m[12];
    const p31 = m[13];
    const p32 = m[14];
    const p33 = m[15];

    const t_20_31 = p20 * p31;
    const t_20_32 = p20 * p32;
    const t_20_33 = p20 * p33;
    const t_21_30 = p21 * p30;
    const t_21_32 = p21 * p32;
    const t_21_33 = p21 * p33;
    const t_22_30 = p22 * p30;
    const t_22_31 = p22 * p31;
    const t_22_33 = p22 * p33;
    const t_23_30 = p23 * p30;
    const t_23_31 = p23 * p31;
    const t_23_32 = p23 * p32;

    const t_10_31 = p10 * p31;
    const t_10_32 = p10 * p32;
    const t_10_33 = p10 * p33;
    const t_11_30 = p11 * p30;
    const t_11_32 = p11 * p32;
    const t_11_33 = p11 * p33;
    const t_12_30 = p12 * p30;
    const t_12_31 = p12 * p31;
    const t_12_33 = p12 * p33;
    const t_13_30 = p13 * p30;
    const t_13_31 = p13 * p31;
    const t_13_32 = p13 * p32;

    const t_10_21 = p10 * p21;
    const t_10_22 = p10 * p22;
    const t_10_23 = p10 * p23;
    const t_11_20 = p11 * p20;
    const t_11_22 = p11 * p22;
    const t_11_23 = p11 * p23;
    const t_12_20 = p12 * p20;
    const t_12_21 = p12 * p21;
    const t_12_23 = p12 * p23;
    const t_13_20 = p13 * p20;
    const t_13_21 = p13 * p21;
    const t_13_22 = p13 * p22;

    // 00 01 02 03
    // 10 11 12 13
    // 20 21 22 23
    // 30 31 32 33

    const t00 = p11 * (t_22_33 - t_23_32) - p12 * (t_21_33 - t_23_31) + p13 * (t_21_32 - t_22_31);
    const t01 = p10 * (t_22_33 - t_23_32) - p12 * (t_20_33 - t_23_30) + p13 * (t_20_32 - t_22_30);
    const t02 = p10 * (t_21_33 - t_23_31) - p11 * (t_20_33 - t_23_30) + p13 * (t_20_31 - t_21_30);
    const t03 = p10 * (t_21_32 - t_22_31) - p11 * (t_20_32 - t_22_30) + p12 * (t_20_31 - t_21_30);

    // 行列式
    const determinant = p00 * t00 - p01 * t01 + p02 * t02 - p03 * t03;

    const t10 = p01 * (t_22_33 - t_23_32) - p02 * (t_21_33 - t_23_31) + p03 * (t_21_32 - t_22_31);
    const t11 = p00 * (t_22_33 - t_23_32) - p02 * (t_20_33 - t_23_30) + p03 * (t_20_32 - t_22_30);
    const t12 = p00 * (t_21_33 - t_23_31) - p01 * (t_20_33 - t_23_30) + p03 * (t_20_31 - t_21_30);
    const t13 = p00 * (t_21_32 - t_22_31) - p01 * (t_20_32 - t_22_30) + p02 * (t_20_31 - t_21_30);

    const t20 = p01 * (t_12_33 - t_13_32) - p02 * (t_11_33 - t_13_31) + p03 * (t_11_32 - t_12_31);
    const t21 = p00 * (t_12_33 - t_13_32) - p02 * (t_10_33 - t_13_30) + p03 * (t_10_32 - t_12_30);
    const t22 = p00 * (t_11_33 - t_13_31) - p01 * (t_10_33 - t_13_30) + p03 * (t_10_31 - t_11_30);
    const t23 = p00 * (t_11_32 - t_12_31) - p01 * (t_10_32 - t_12_30) + p02 * (t_10_31 - t_11_30);

    const t30 = p01 * (t_12_23 - t_13_22) - p02 * (t_11_23 - t_13_21) + p03 * (t_11_22 - t_12_21);
    const t31 = p00 * (t_12_23 - t_13_22) - p02 * (t_10_23 - t_13_20) + p03 * (t_10_22 - t_12_20);
    const t32 = p00 * (t_11_23 - t_13_21) - p01 * (t_10_23 - t_13_20) + p03 * (t_10_21 - t_11_20);
    const t33 = p00 * (t_11_22 - t_12_21) - p01 * (t_10_22 - t_12_20) + p02 * (t_10_21 - t_11_20);

    // 余子式矩阵
    // prettier-ignore
    cofactor = new Float32Array([
      t00, t01, t02, t03,
      t10, t11, t12, t13,
      t20, t21, t22, t23,
      t30, t31, t32, t33,
    ]);

    // prettier-ignore
    const algebraicCofactor = new Float32Array([
      t00, -t01, t02, -t03,
      -t10, t11, -t12, t13,
      t20, -t21, t22, -t23,
      -t30, t31, -t32, t33,
    ]);

    return {
      cofactor,
      algebraicCofactor,
      determinant
    };
  }

  /**
   * 求逆矩阵
   * @param m 目标矩阵
   * @param target 接收目标矩阵的逆矩阵
   * @returns 逆矩阵
   */
  static inverse(m: Float32Array, target?: Float32Array) {
    target = target || new Float32Array(16);

    // 行列式和代数余子式矩阵
    const { determinant, algebraicCofactor } = Matrix4.det(m);

    // 行列式为0，无法求逆
    if (determinant === 0) {
      var msg = "inverse() can't invert m, determinant is 0";
      console.warn(msg);
      return Matrix4.identity();
    }

    // 伴随矩阵（转置）
    const transpose = Matrix4.transpose(algebraicCofactor);

    // 乘以 1/原矩阵的行列式，得出逆矩阵
    for (let i = 0; i < transpose.length; i++) {
      target[i] = (transpose[i] * 1) / determinant;
    }

    return target;
  }
}
