import { ModalLocale } from '../../Modal/locale';
// eslint-disable-next-line import/no-cycle
import { PickerLocale } from '../../DatePicker/generatePicker';

// @ts-ignore
import { EmptyLocale } from '../../Empty/locale';

export interface ILocale {
  Modal?: ModalLocale;
  DatePicker?: PickerLocale;
  Empty?: EmptyLocale;
}
