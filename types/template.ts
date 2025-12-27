export type Template = {
    id: string;
    name: string;
    image: string;
    render: React.FC;
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    animation: string;
    color?: string;
    htmlId: string;
}