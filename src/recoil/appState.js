import { atom, selector } from 'recoil';

const defaultData = {
  popover: {
    data: {
      items: [],
    },
    handlers: {},
  },
  podcasts: false
};

const appState = atom({
  key: 'app',
  default: defaultData,
});

export const popoverState = selector({
  // newListState này sẽ chứa danh sách các action có trạng thái là new.
  key: 'popover',
  get: ({ get }) => {
    const app = get(appState); // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.
    return app.popover; // chọn và trả về những thằng có status là new.
  },
  set: ({ get, set }, newValue) => {
    const app = get(appState);

    set(appState, { ...app, popover: newValue });
  },
});


export const podcastsState = selector({
  key: 'podcasts',
  get: ({get}) => {
    const app = get(appState);
    return app.podcasts;
  },
  set: ({get,set}, newValue) => {
    const app = get(appState);
    set(appState, { ...app, podcasts: newValue });
  }
 });
