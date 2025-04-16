// import { Box } from "@mantine/core";

interface PageHeaderProps {
    title: string;
    description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
    return (
        <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            {description && (
                <p className="text-xl text-muted-foreground">{description}</p>
            )}
        </div>
    );
}