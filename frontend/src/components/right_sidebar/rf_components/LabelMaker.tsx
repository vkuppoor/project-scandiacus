import React, { useState } from "react";
import { useScrollIndicator } from "../../custom_hooks/useScrollIndicator";
import Tippy from "@tippyjs/react";
import {
    PlusIcon,
    PencilIcon,
    TrashIcon,
    CheckIcon,
} from "@heroicons/react/solid";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    const [editedLabel, setEditedLabel] = useState<string>("");
    const [editedLabelErrorMsg, setEditedLabelErrorMsg] = useState<string>("");
    const { boxShadow, onScrollHandler } = useScrollIndicator();

    const handleSelectLabel = (selectedLabel: string) => {
        setSelectedLabel(selectedLabel);
    };

    const handleSubmitNewLabel = (e: any): void => {
        e.preventDefault();
        if (validateNewLabel(newLabel)) {
            handleAddLabel();
            setNewLabel((prev) => "");
            setNewLabelErrorMsg((prev) => "");
        }
    };

    const validateNewLabel = (newLabelToValidate: string): boolean => {
        const trimmedLabel = newLabelToValidate.trim();
        if (trimmedLabel.length === 0) {
            setNewLabelErrorMsg((prev) => "Field is empty");
            return false;
        }

        if (labels.labelNames.includes(trimmedLabel)) {
            setNewLabelErrorMsg((prev) => "Label already exists");
            return false;
        }
        return true;
    };

    const handleAddLabel = () => {
        const trimmedLabel: string = newLabel.trim();
        const updatedLabels: string[] = labels.labelNames.slice(0);
        updatedLabels.push(trimmedLabel);
        setLabels((prev) => ({ ...prev, labelNames: updatedLabels }));

        const updatedIsLabelEditOpen: boolean[] =
            labels.isLabelEditOpen.slice(0);
        updatedIsLabelEditOpen.push(false);
        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
    };

    const handleSubmitEditedLabel = (e: any, index: number) => {
        e.preventDefault();
        if (validateEditedLabel(editedLabel, index)) {
            handleEditLabel(index);
            setEditedLabel((prev) => "");
            setEditedLabelErrorMsg((prev) => "");
        }
    };

    const validateEditedLabel = (
        editedLabelToValidate: string,
        index: number
    ): boolean => {
        const trimmedLabel = editedLabelToValidate.trim();
        if (trimmedLabel.length === 0) {
            setEditedLabelErrorMsg((prev) => "Field is empty");
            return false;
        }

        if (
            labels.labelNames.includes(trimmedLabel) &&
            labels.labelNames[index] !== trimmedLabel
        ) {
            setEditedLabelErrorMsg((prev) => "Label already exists");
            return false;
        }

        return true;
    };

    const handleEditLabel = (index: number) => {
        const trimmedLabel: string = editedLabel.trim();
        const updatedLabels: string[] = labels.labelNames.slice(0);
        updatedLabels.splice(index, 1, trimmedLabel);
        setLabels((prev) => ({ ...prev, labelNames: updatedLabels }));

        const updatedIsLabelEditOpen: boolean[] =
            labels.isLabelEditOpen.slice(0);
        updatedIsLabelEditOpen.splice(index, 1, false);
        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
    };

    const handleOpenLabelEdit = (selectedLabelToEdit: string) => {
        const updatedIsLabelEditOpen: boolean[] =
            labels.isLabelEditOpen.slice(0);

        updatedIsLabelEditOpen.forEach((e, index) => {
            updatedIsLabelEditOpen[index] = false;
        });
        updatedIsLabelEditOpen.splice(
            labels.labelNames.indexOf(selectedLabelToEdit),
            1,
            true
        );
        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
        setEditedLabel((prev) => selectedLabelToEdit);
        setEditedLabelErrorMsg((prev) => "");
    };

    const handleDeleteLabel = (labelToDelete: string) => {
        const updatedLabels: string[] = labels.labelNames.slice(0);
        updatedLabels.splice(labels.labelNames.indexOf(labelToDelete), 1);
        setLabels((prev) => ({ ...prev, labelNames: updatedLabels }));

        const updatedIsLabelEditOpen: boolean[] =
            labels.isLabelEditOpen.slice(0);
        updatedIsLabelEditOpen.splice(
            labels.labelNames.indexOf(labelToDelete),
            1
        );
        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
    };

    const handleCancelLabelEdit = () => {
        const updatedIsLabelEditOpen: boolean[] =
            labels.isLabelEditOpen.slice(0);

        updatedIsLabelEditOpen.forEach((e, index) => {
            updatedIsLabelEditOpen[index] = false;
        });

        setLabels((prev) => ({
            ...prev,
            isLabelEditOpen: updatedIsLabelEditOpen,
        }));
    };

    // console.log("labels", labels);
    // console.log("newLabel", newLabel);
    // console.log("editedLabel", editedLabel);
    // console.log("newLabelErrorMsg", newLabelErrorMsg);

    return (
        <div className="label-maker | flex flex-col items-center | bg-white w-4/5 max-h-96 m-2 p-2 rounded">
            <div className="lm-title | text-center">Labels</div>
            {labels.labelNames.length !== 0 ? (
                <div
                    onScroll={onScrollHandler}
                    className={`label-list | w-full overflow-y-scroll ${
                        labels.labelNames.length > 5 ? boxShadow : ""
                    }`}
                >
                    {labels.labelNames.map((item: string, index: number) => (
                        <div key={item} className="label-container">
                            {labels.isLabelEditOpen[
                                labels.labelNames.indexOf(item)
                            ] ? (
                                <div className="edit-label-container">
                                    <form
                                        className="label-edit
                                                | flex justify-between items-center gap-x-2
                                                | bg-slate-100 m-1 p-2 rounded"
                                        onSubmit={(e) =>
                                            handleSubmitEditedLabel(e, index)
                                        }
                                    >
                                        <div className="edit-label-name-container">
                                            <input
                                                type="text"
                                                className="label-input | m-1 p-2 w-full rounded"
                                                value={editedLabel}
                                                onChange={(e) =>
                                                    setEditedLabel(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                        <div className="label-options-container | flex">
                                            <button
                                                className="submit-edited-label-btn | bg-slate-400 m-0.5 p-1 rounded"
                                                type="submit"
                                            >
                                                <CheckIcon className="pencil-icon | w-6 text-white" />
                                            </button>
                                            <button
                                                className="cancel-edit-label-btn | bg-green-400 m-0.5 p-1 rounded"
                                                onClick={() =>
                                                    handleCancelLabelEdit()
                                                }
                                            >
                                                {/* <TrashIcon className="pencil-icon | w-6 text-white" /> */}
                                                <FontAwesomeIcon
                                                    icon={faRotate}
                                                    className="rotate-icon | w-6 text-white"
                                                />
                                            </button>
                                        </div>
                                    </form>
                                    <span className="new-label-error-ms | text-red-400">
                                        {editedLabelErrorMsg}
                                    </span>
                                </div>
                            ) : (
                                <button
                                    name="dblclick-to-edit"
                                    className="button-dblclick | w-full"
                                    onDoubleClick={() =>
                                        handleOpenLabelEdit(item)
                                    }
                                >
                                    <label
                                        key={item}
                                        className="label
                                                    | flex justify-between items-center gap-x-2
                                                    | bg-slate-100 m-1 p-2 rounded cursor-pointer"
                                        htmlFor={item}
                                    >
                                        <div className="label-input-container | flex items-center gap-x-1">
                                            <input
                                                id={item}
                                                type="radio"
                                                name="select-label"
                                                className="radio-button | rounded"
                                                onChange={() =>
                                                    handleSelectLabel(item)
                                                }
                                            />
                                            <label
                                                className="label-name | mb-0.5"
                                                htmlFor={item}
                                            >
                                                {item}
                                            </label>
                                        </div>
                                        <div className="label-options-container | flex">
                                            <button
                                                className="edit-label-btn | bg-slate-400 m-0.5 p-1 rounded"
                                                onClick={() =>
                                                    handleOpenLabelEdit(item)
                                                }
                                            >
                                                <PencilIcon className="pencil-icon | w-6 text-white" />
                                            </button>
                                            <button
                                                className="delete-label-btn | bg-red-400 m-0.5 p-1 rounded"
                                                onClick={() =>
                                                    handleDeleteLabel(item)
                                                }
                                            >
                                                <TrashIcon className="pencil-icon | w-6 text-white" />
                                            </button>
                                        </div>
                                    </label>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            ) : null}
            <form
                id="add-label-button-container"
                className="add-label-button-container | flex justify-center | w-4/5"
                onSubmit={handleSubmitNewLabel}
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
                    className="label-input | m-1 p-2 border-2 border-slate-400 rounded"
                    placeholder="Enter label here"
                    value={newLabel}
                    onChange={(e) => setNewLabel(e.target.value)}
                />
            </form>
            <span className="new-label-error-ms | text-red-400">
                {newLabelErrorMsg}
            </span>
        </div>
    );
};

export default LabelMaker;
