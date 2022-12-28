interface Attribute {
    trait_type: string;
    value: string;
}

export default interface Metadata {
    id: number;
    name: string;
    description: string;
    image: string;
    external_url: string;
    attributes: Array<Attribute>;
}
