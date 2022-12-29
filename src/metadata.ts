interface Attribute {
    trait_type: string;
    value: string;
}

export default interface Metadata {
    id: string;
    name: string;
    description: string;
    image: string;
    external_url: string;
    attributes: Array<Attribute>;
    createdAt: string;
    updatedAt: string;
}
