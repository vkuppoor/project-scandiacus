import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import { useDeepCompareEffect } from "ahooks";
import { PlusIcon, PencilIcon, TrashIcon } from "@heroicons/react/solid";

type labelsObj = {
    labelNames: string[];
    isLabelEditOpen: boolean[];
};

type Props = {
    labels: labelsObj;
    setLabels: React.Dispatch<React.SetStateAction<labelsObj>>;
    setSelectedLabel: React.Dispatch<React.SetStateAction<string>>;
};

const LabelMaker = ({ labels, setLabels, setSelectedLabel }: Props) => {
    const [newLabel, setNewLabel] = useState<string>("");
    const [newLabelErrorMsg, setNewLabelErrorMsg] = useState<string>("");
    const [isLabelSubmitted, setIsLabelSubmitted] = useState<boolean>(false);
    // const [openLabelEdit, setOpenLabelEdit] = useState<boolean[]>([]);

    useDeepCompareEffect(() => {
        const radios = Array.from(document.getElementsByName("select-label"));
        radios.forEach((radio) => {
            radio.addEventListener(
                "click",
                () => handleSelectLabel(radio.id),
                true
            );
        });

        return () => {
            radios.forEach((radio) => {
                radio.removeEventListener(
                    "click",
                    () => handleSelectLabel(radio.id),
                    true
                );
            });
        };
    }, [labels]);

    useEffect(() => {
        if (isLabelSubmitted === true) {
            handleAddLabel(newLabel);
            setIsLabelSubmitted((prev) => false);
        }
    }, [isLabelSubmitted]);

    const handleSelectLabel = (selectedLabel: string) => {
        setSelectedLabel(selectedLabel);
    };

    const handleSubmitLabel = (e: any): void => {
        e.preventDefault();
        if (validateNewLabel(newLabel) === true) {
            setIsLabelSubmitted((prev) => true);
        }
    };

    const validateNewLabel = (newLabelToValidate: string): boolean => {
        const trimmedLabel = newLabelToValidate.trim();
        if (trimmedLabel.length === 0) {
            setNewLabelErrorMsg("Field is empty");
            return false;
        }

        if (labels.labelNames.includes(trimmedLabel)) {
            setNewLabelErrorMsg("Label already exists");
            return false;
        }
        return true;
    };

    const handleAddLabel = (newLabel: string) => {
        const trimmedLabel: string = newLabel.trim();
        const updatedLabels: string[] = structuredClone(labels.labelNames);
        updatedLabels.push(trimmedLabel);
        setLabels((prev) => ({ ...prev, labelNames: updatedLabels }));

        const updatedIsLabelEditOpen: boolean[] = structuredClone(
            labels.isLabelEditOpen
        );
        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
    };

    const handleIsLabelEditOpen = (item: string) => {
        const updatedIsLabelEditOpen: boolean[] = structuredClone(
            labels.isLabelEditOpen
        );
        updatedIsLabelEditOpen.splice(labels.labelNames.indexOf(item), 1, true);
        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
    };
    console.log("check open", labels);

    console.log("labels", labels);
    // console.log("newLabel", newLabel);
    console.log("newLabelErrorMsg", newLabelErrorMsg);

    return (
        <div className="label-maker | flex flex-col items-center | bg-white w-4/5 m-2 p-2 rounded">
            <div className="lm-title | text-center">Labels</div>
            {labels.labelNames.length !== 0 ? (
                <div className="label-list | w-4/5">
                    {labels.labelNames.map((item: string) => (
                        <label
                            key={item}
                            className="label
                                | flex justify-between items-center
                                | bg-slate-100 m-1 p-2 rounded"
                            htmlFor={item}
                        >
                            <div className="label-input-container | flex items-center gap-x-1">
                                <input
                                    id={item}
                                    type="radio"
                                    name="select-label"
                                    className="radio-button | rounded"
                                    // onClick={handleSelectedLabel(item)}
                                />
                                <label
                                    className="label-name | mb-0.5"
                                    htmlFor={item}
                                >
                                    {item}
                                </label>
                            </div>
                            <div className="label-options-container">
                                <button
                                    className="edit-label-btn | bg-slate-400 m-0.5 p-1 rounded"
                                    onClick={() => handleIsLabelEditOpen(item)}
                                >
                                    <PencilIcon className="pencil-icon | w-6 text-white" />
                                </button>
                                <button className="delete-label-btn | bg-red-400 m-0.5 p-1 rounded">
                                    <TrashIcon className="pencil-icon | w-6 text-white" />
                                </button>
                            </div>
                        </label>
                    ))}
                </div>
            ) : null}
            <form
                id="add-label-button-container"
                className="add-label-button-container | flex justify-center | w-4/5"
                onSubmit={handleSubmitLabel}
            >
                <Tippy
                    content={
                        <span className="add-label-tooltip | bg-slate-400 p-1 rounded text-white">
                            Add label
                        </span>
                    }
                    placement="bottom"
                    delay={500}
                >
                    <button
                        id="add-label-button"
                        className="bg-slate-400 m-1 p-2 rounded"
                        type="submit"
                    >
                        <PlusIcon className="minus-icon | w-6 text-white" />
                    </button>
                </Tippy>
                <input
                    type="text"
                    className="label-input | m-1 p-2"
                    placeholder="Enter label here"
                    onChange={(e) => setNewLabel(e.target.value)}
                />
            </form>
        </div>
    );
};

export default LabelMaker;
