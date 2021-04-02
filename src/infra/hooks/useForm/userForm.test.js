/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '.';

describe('useForm()', () => {
  describe('when user types', () => {
    test('change the value', () => {
      const { result } = renderHook(() =>
        useForm({
          initialValues: {
            nome: 'Marcos',
          },
        }),
      );
      const initialValues = { nome: 'Marcos' };
      expect(result.current.values).toEqual(initialValues);

      const event = {
        target: {
          getAttribute: () => 'nome',
          value: 'Mh',
        },
      };

      act(() => {
        result.current.handleChange(event);
      });

      // expect, to be a new value
      expect(result.current.values).toEqual({ nome: 'Mh' });
    });
  });
});
