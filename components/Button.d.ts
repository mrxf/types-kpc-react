import * as React from 'react';

declare const ButtonTypes: ["default", "primary", "warning", "danger", "success", "none"];
export declare type ButtonType = typeof ButtonTypes[number];
export declare type TageProps = { [key: string]: React.ReactText }

export interface ButtonMethods {
    /** 展示loading状态 */
    showLoading: () => void;

    /** 取消loading状态 */
    hideLoading:  () => void;

    /** 禁用按钮 */
    disable: () => void;

    /** 启用按钮 */
    enable: () => void;
}

export interface ButtonProps {
    /**
     * @default "default"
     * 按钮类型	
     */
    type: ButtonType;

    /**
     * @default "default"
     * 按钮尺寸
     */
    size: "default" | "small" | "mini";

    /**
     * @default false
     * 是否为图标按钮（宽高相等）
     */
    icon: boolean;

    /** 是否为圆角按钮 */
    circle: boolean;

    /** 是否为正在加载中的按钮 */
    loading: boolean;

    /** 是否禁用状态 */
    disabled: boolean;

    /** 是否宽度100% */
    fluid: boolean;

    /** 按钮<button>元素的type */
    htmlType: string;

    /** 按钮渲染后的实际html元素，例如我们可以传入"a"来渲染成超链接 */
    tagName: string;

    /** 当指定tagName时，该属性将传给tagName指定的元素 */
    tagProps: TageProps;

    /** 对于radio类型的按钮组，我们可以给每个按钮指定一个选中时的值 */
    value: any;

    /**
     * @default undefined
     * 对于radio类型的按钮组，我们给radio指定name属性
     */
    name: string;

    /**
     * @default false
     * 展示透明背景的按钮
     */
    ghost: boolean;

}

export interface ButtonGroupProps {
    /**
     * @default false
     * 是否垂直排列按钮组
     */
    vertical: boolean;

    /**
     * @default "none"
     * 指定按钮组为单选或复选类型，此时需要给每个按钮指定value来作为选中的值
     */
    checkType: "radio" | "checkbox" | "none";

    /**
     * 对于radio和checkbox类型按钮组，该值表示选中的按钮的值，可以使用v-model进行双向绑定
     */
    value: any;
}

export declare const Button: React.ComponentType<Partial<ButtonProps>>;

export declare const ButtonGroup: React.ComponentType<Partial<ButtonGroupProps>>;
