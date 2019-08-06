import {FlexStyle} from "react-native";

type PartialFlex = Partial<FlexStyle>;

export const flexRow: PartialFlex = { flexDirection: 'row' };
export const flexRowReverse: PartialFlex = { flexDirection: 'row-reverse' };
export const flexColumn: PartialFlex = { flexDirection: 'column' };
export const flexColumnReverse: PartialFlex = { flexDirection: 'column-reverse' };

export const flexNoShrink: PartialFlex = { flex: 0 };

export const flexWrap: PartialFlex = { flexWrap: 'wrap' };

export const itemsStart: PartialFlex = { alignItems: 'flex-start' };
export const itemsEnd: PartialFlex = { alignItems: 'flex-end' };
export const itemsCenter: PartialFlex = { alignItems: 'center' };
export const itemsStretch: PartialFlex = { alignItems: 'stretch' };
export const itemsBaseline: PartialFlex = { alignItems: 'baseline' };

export const selfAuto: PartialFlex = { alignSelf: 'auto' };
export const selfStart: PartialFlex = { alignSelf: 'flex-start' };
export const selfEnd: PartialFlex = { alignSelf: 'flex-end' };
export const selfCenter: PartialFlex = { alignSelf: 'center' };
export const selfStretch: PartialFlex = { alignSelf: 'stretch' };
export const selfBaseline: PartialFlex = { alignSelf: 'baseline' };

export const justifyStart: PartialFlex = { justifyContent: 'flex-start' };
export const justifyEnd: PartialFlex = { justifyContent: 'flex-end' };
export const justifyCenter: PartialFlex = { justifyContent: 'center' };
export const justifyBetween: PartialFlex = { justifyContent: 'space-between' };
export const justifyAround: PartialFlex = { justifyContent: 'space-around' };
export const justifyEvenly: PartialFlex = { justifyContent: 'space-evenly' };

export const contentStart: PartialFlex = { alignContent: 'flex-start' };
export const contentEnd: PartialFlex = { alignContent: 'flex-end' };
export const contentCenter: PartialFlex = { alignContent: 'center' };
export const contentStretch: PartialFlex = { alignContent: 'stretch' };
export const contentBetween: PartialFlex = { alignContent: 'space-between' };
export const contentAround: PartialFlex = { alignContent: 'space-around' };
