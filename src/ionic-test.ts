const IonBadge = /*#__PURE__*/class {
  constructor() {
    console.warn('Badge Test')
  }
};

const IonChip = /*#__PURE__*/class {
  constructor() {
    console.warn('Chip Test')
  }
};

const provideIonicAngular = /*#__PURE__*/(config: any) => {
  console.warn('Provide Test')
  return false;
};

export { IonBadge, IonChip, provideIonicAngular };
