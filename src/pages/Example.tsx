import CommonCheckbox from '@components/checkbox/CommonCheckbox';
import CommonRadioButton from '@components/button/CommonRadioButton';
import CommonTooltip from '@components/tooltip/CommonTooltip';
import CommonTabMenu from '@components/tab/CommonTabMenu';
import HomeIconWhite from '@assets/images/icons/home-icon-white.png';
import HomeIconGray from '@assets/images/icons/home-icon-gray.png';
import HomeIconBlue from '@assets/images/icons/home-icon-blue.png';
import { useState } from 'react';

export default function Example() {
    const [selected, setSelected] = useState<string>('option1');
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="flex flex-col gap-[16px] p-[24px]">
            <div className="flex gap-[48px]">
                <CommonCheckbox defaultChecked label="Checkbox" />
                <CommonCheckbox defaultChecked disabled/>
                <CommonCheckbox indeterminate />
                <CommonRadioButton
                    checked={selected === 'option1'}
                    label= "Option 1"
                    name="group1"
                    value="option1"
                    onChange={(e) => setSelected(e.target.value)}
                />
                <CommonRadioButton
                    checked={selected === 'option2'}
                    name="group1"
                    value="option2"
                    onChange={(e) => setSelected(e.target.value)}
                />
                <CommonRadioButton
                    disabled
                />
            </div>
            <div className="flex items-center gap-[24px] ml-[150px]">
                <CommonTooltip placement="top" title="Example Tooltip">
                    <span>Top</span>
                </CommonTooltip>

                <CommonTooltip placement="bottom" title="Example Tooltip">
                    <span>Bottom</span>
                </CommonTooltip>

                <CommonTooltip placement="left" title="Example Tooltip">
                    <span>Left</span>
                </CommonTooltip>

                <CommonTooltip placement="right" title="Example Tooltip">
                    <span>Right</span>
                </CommonTooltip>

                <CommonTooltip
                    placement="bottom"
                    size="md"
                    title="Example Tooltip"
                >
                    <span>Medium Outlined</span>
                </CommonTooltip>

                <CommonTooltip
                    placement="top"
                    size="lg"
                    title={
                        <div className="flex flex-col items-center gap-[12px] w-[200px]">
                            <span className="mb-[12px] mt-[15px] ml-[16px] mr-[16px] text-[15px] text-center">Example Tooltip</span>
                            <button className="bg-[#FFFFFF] pt-[4px] pb-[4px] border-none rounded-[6px] text-[14px] w-full font-semibold text-[#387BE0] cursor-pointer" >
                                Button
                            </button>
                        </div>
                    }
                >
                    <button>Large with Button</button>
                </CommonTooltip>
            </div>

            <CommonTabMenu
                tabs={[
                    { label: 'Tab Item', value: 'tab1', icon: HomeIconGray, activeIcon: HomeIconWhite, iconSize: 14 },
                    { label: 'Tab Item', value: 'tab2', icon: HomeIconGray, activeIcon: HomeIconWhite, iconSize: 14 },
                    { label: 'Tab Item', value: 'tab3', icon: HomeIconGray, activeIcon: HomeIconWhite, iconSize: 14 }
                ]}
                value={activeTab}
                variant="filled"
                onChange={(val) => setActiveTab(val as string)}
            />
            <CommonTabMenu
                tabs={[
                    { label: 'Tab Item', value: 'tab1', icon: HomeIconGray, activeIcon: HomeIconBlue, iconSize: 14 },
                    { label: 'Tab Item', value: 'tab2', icon: HomeIconGray, activeIcon: HomeIconBlue, iconSize: 14 }
                ]}
                value={activeTab}
                variant="outlined"
                onChange={(val) => setActiveTab(val as string)}
            />
            <CommonTabMenu
                tabs={[
                    { label: 'Tab Item', value: 'tab1', icon: HomeIconGray, activeIcon: HomeIconBlue, iconSize: 14 },
                    { label: 'Tab Item', value: 'tab2', icon: HomeIconGray, activeIcon: HomeIconBlue, iconSize: 14 },
                    { label: 'Tab Item', value: 'tab3', icon: HomeIconGray, activeIcon: HomeIconBlue, iconSize: 14 }
                ]}
                value={activeTab}
                variant="soft"
                onChange={(val) => setActiveTab(val as string)}
            />
        </div>
    );
}