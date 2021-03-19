const container = (fieldArray) => {
    let object1 = {
        fieldType: "ContainerRepresentation",
        id: "1615997907760",
        name: "Label",
        type: "container",
        value: null,
        required: false,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: null,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        dateDisplayFormat: null,
        layout: null,
        sizeX: 2,
        sizeY: 1,
        row: -1,
        col: -1,
        visibilityCondition: null,
        numberOfColumns: fieldArray.length,
        fields: { ...fieldArray }
    }

    return object1
}

const textFieldCustom = (prop) => {
    let textField = {
        fieldType: "FormFieldRepresentation",
        id: prop.id,
        name: prop.name,
        type: "text_input_custom",
        value: null,
        required: false || prop.required,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: null,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        params: {
            existingColspan: 1,
            maxColspan: 2
        },
        dateDisplayFormat: null,
        layout: {
            row: -1,
            column: -1,
            colspan: 1
        },
        sizeX: 1,
        sizeY: 1,
        row: -1,
        col: -1,
        visibilityCondition: null
    }

    return textField
}

const tableTwo = (prop) => {
    let objectTable = {
        fieldType: "FormFieldRepresentation",
        id: prop.id,
        name: prop.name,
        type: "table",
        value: null,
        required: false,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: null,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        params: {
            existingColspan: 1,
            maxColspan: 2
        },
        dateDisplayFormat: null,
        layout: {
            row: -1,
            column: -1,
            colspan: 1
        },
        sizeX: 1,
        sizeY: 1,
        row: -1,
        col: -1,
        visibilityCondition: null
    };
    return objectTable
}

const dropdown = (prop) => {
    let objectDropdown = {
        fieldType: "RestFieldRepresentation",
        id: prop.id,
        name: prop.name,
        type: "dropdown",
        value: "Choose one...",
        required: false || prop.required,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: true,
        options: [
            {
                id: "empty",
                name: "Choose one..."
            },
            ...prop.options
        ],
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        params: {
            existingColspan: 1,
            maxColspan: 2
        },
        dateDisplayFormat: null,
        layout: {
            row: -1,
            column: -1,
            colspan: 1
        },
        sizeX: 1,
        sizeY: 1,
        row: -1,
        col: -1,
        visibilityCondition: null,
        endpoint: null,
        requestHeaders: null
    }
    return objectDropdown
}

const date = (prop) => {
    let objectDate = {
        fieldType: "FormFieldRepresentation",
        id: prop.id,
        name: prop.name,
        type: "date",
        value: null,
        required: false || prop.required,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: null,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        params: {
            existingColspan: 1,
            maxColspan: 2
        },
        dateDisplayFormat: null,
        layout: {
            row: -1,
            column: -1,
            colspan: 1
        },
        sizeX: 1,
        sizeY: 1,
        row: -1,
        col: -1,
        visibilityCondition: null
    }

    return objectDate
}

const header = (prop,fieldArray) => {
    let objectHeader = {
        fieldType: "ContainerRepresentation",
        id: prop.id,
        name: prop.name,
        type: "group",
        value: null,
        required: false || prop.required,
        readOnly: false,
        overrideId: false,
        colspan: 1,
        placeholder: null,
        minLength: 0,
        maxLength: 0,
        minValue: null,
        maxValue: null,
        regexPattern: null,
        optionType: null,
        hasEmptyValue: null,
        options: null,
        restUrl: null,
        restResponsePath: null,
        restIdProperty: null,
        restLabelProperty: null,
        tab: null,
        className: null,
        dateDisplayFormat: null,
        layout: {
            row: -1,
            column: -1,
            colspan: 2
        },
        sizeX: 2,
        sizeY: 1,
        row: -1,
        col: -1,
        visibilityCondition: null,
        numberOfColumns: fieldArray.length,
        fields: { ...fieldArray }
    }

    return objectHeader
}

module.exports = { container, textFieldCustom, tableTwo, dropdown, date , header };
