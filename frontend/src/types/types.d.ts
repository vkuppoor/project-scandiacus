export declare const COMMON_MIME_TYPES: Map<string, string>;
export declare function toFileWithPreview(
    file: FileWithPreview,
    preview: string
): FileWithPreview;
export interface FileWithPreview extends File {
    readonly preview: string;
}
