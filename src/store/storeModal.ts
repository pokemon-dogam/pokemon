import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { modalType, modalDataType } from '@interfaces/modal';
import { MODAL } from '@common/string';

const useModalStore = defineStore(MODAL, () => {
  const flag = reactive<modalType>({
    toastMessage: false,
  });

  const modalData = reactive<modalDataType>({
    toastMessage: {},
  });

  const openModal = (key: string) => {
    flag[key] = true;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openModalWithData = (key: string, target: any) => {
    flag[key] = true;
    modalData[key] = target;
  };

  const closeModal = (key: string) => {
    flag[key] = false;
  };

  const toggleModal = (key: string) => {
    const isFlagKey = flag[key] === true;

    if (isFlagKey) {
      closeModal(key);
    } else {
      openModal(key);
    }
  };

  let timeout: any = 0;
  const toggleToastMessage = (key: string, message: any) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    flag[key] = true;
    modalData[key] = message;
    timeout = setTimeout(() => {
      flag[key] = false;
    }, 2000);
  };

  return {
    flag,
    modalData,
    openModal,
    openModalWithData,
    closeModal,
    toggleModal,
    toggleToastMessage,
  };
});

export default useModalStore;
