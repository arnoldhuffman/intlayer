/* eslint-disable @typescript-eslint/no-empty-interface */
import '@intlayer/core';

declare module '@intlayer/core' {
  interface IntLayerDictionaryTypesConnector {
    // This type is empty and should augmented by the dictionaries types in the .intlayer folder
    // See https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
  }
}