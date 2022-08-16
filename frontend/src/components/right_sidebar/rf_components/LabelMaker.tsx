import React from "react";

type Props = {
    labels: string[];
    setLabels: React.Dispatch<React.SetStateAction<string[]>>;
    setSelectedLabel: React.Dispatch<React.SetStateAction<string>>;
};

const LabelMaker = ({ labels, setLabels, setSelectedLabel }: Props) => {
    const handleSelectedLabel = (selectedLabel: string) => {
        setSelectedLabel(selectedLabel);
    };

    return (
        <div className="label-maker | flex flex-col items-center | bg-white w-4/5 m-2">
            <div className="lm-title | text-center">Labels</div>
            {labels.length !== 0 ? (
                <div className="label-list | w-4/5">
                    {labels.map((item: string) => (
                        <label
                            className="label
                                | flex justify-start items-center
                                | bg-slate-100 m-1 p-2 rounded"
                            htmlFor={item}
                        >
                            <input
                                id={item}
                                type="radio"
                                name="select-label"
                                className="radio-button | rounded"
                                // onClick={handleSelectedLabel(item)}
                            />
                            <label htmlFor={item}>{item}</label>
                        </label>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default LabelMaker;
