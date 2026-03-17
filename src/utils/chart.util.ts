import { CommonChartKeysProps } from '@type/common/chart.type';
import { FieldValues } from 'react-hook-form';

/**
 * Extracts numeric chart data and label strings from a list of objects, based on the provided key mappings.
 *
 * @param dataList - The dataset to extract values and labels from.
 * @param mapKeys - An object containing the property names to map
 * @returns
 */
export function extractChartData<T extends FieldValues>(dataList: T[], mapKeys: CommonChartKeysProps<T>): [number[], string[]] {
    const data: number[] = [];
    const labels: string[] = [];

    for (const item of dataList) {
        const mapKeyData = item[mapKeys.data];
        const finalData = typeof mapKeyData === 'string'
            ? mapKeyData.replace(/[^0-9.-]/g, '')
            : mapKeyData;

        data.push(Number(finalData || 0));
        labels.push(String(item[mapKeys.label] ?? ''));
    }

    return [data, labels];
}

/**
 * Wraps a label string into multiple lines based on a character limit.
 * Groups words together and breaks only when the line exceeds the limit.
 *
 * @param label - The text to wrap.
 * @param limit - The maximum number of characters per line (approximate).
 * @returns An array of strings representing the lines.
 */
export function wrapLabel(label: string, limit = 7): string[] {
    const words = label.split(' ');
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const word = words[i];

        if (currentLine.length + 1 + word.length <= limit) {
            currentLine += ` ${word}`;
        }
        else {
            lines.push(currentLine);

            currentLine = word;
        }
    }

    lines.push(currentLine);

    return lines;
}