import { calculateTriangleArea } from '../src/main';

describe('main.tsのテスト', () => {
  test('正しい数値を渡した場合、正常な計算結果が得られること。', () => {
    const triangleArea = calculateTriangleArea(3, 4);
    expect(triangleArea).toBe(6);
  });

  test('底辺の値が0であった場合、面積は0になること', () => {
    const triangleArea = calculateTriangleArea(0, 4);
    expect(triangleArea).toBe(0);
  });

  test('高さが0の場合、面積は0になること', () => {
    const triangleArea = calculateTriangleArea(4, 0);
    expect(triangleArea).toBe(0);
  });

});
