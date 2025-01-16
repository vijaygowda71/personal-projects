import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useLocalization } from '../localiizationContext.js';
import React from 'react';

const withRTL = (WrappedComponent, componentType = 'view') => {
  return React.forwardRef(({ style, ...props }, ref) => {
    const { isRTL } = useLocalization();

    const getAlignItems = (alignment) => {
      if (!isRTL) return alignment;
      switch (alignment) {
        case 'flex-start': return 'flex-end';
        case 'flex-end': return 'flex-start';
        default: return alignment;
      }
    };

    const rtlStyles = {
      ...(componentType === 'text' && {
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
      }),
      ...(componentType === 'input' && {
        textAlign: isRTL ? 'right' : 'left',
        writingDirection: isRTL ? 'rtl' : 'ltr',
      }),
      ...(style?.flexDirection && {
        flexDirection: isRTL
          ? style.flexDirection === 'row-reverse'
            ? 'row'
            : style.flexDirection
          : style.flexDirection,
      }),
      ...(style?.alignItems && {
        alignItems: getAlignItems(style.alignItems),
      }),
    };

    return (
      <WrappedComponent
        ref={ref}
        {...props}
        style={[style, rtlStyles]}
      />
    );
  });
};

export const RTLView = withRTL(View, 'view');
export const RTLText = withRTL(Text, 'text');
export const RTLTouchableOpacity = withRTL(TouchableOpacity, 'view');
export const RTLTextInput = withRTL(TextInput, 'input');
