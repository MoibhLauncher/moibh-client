import {
  CHANGE_THEMENAME,
} from './constants';

export interface IAction {
  type: typeof CHANGE_THEMENAME;
  themeName: string;
}

export function changeLocale(themeName: string): IAction {
  return { type: CHANGE_THEMENAME as typeof CHANGE_THEMENAME, themeName };
}
