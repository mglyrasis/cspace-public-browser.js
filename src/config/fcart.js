import { defineMessages } from 'react-intl';

export default {
  esIndexName: 'fcart',

  detailFields: {
    fields: {
      materialTechniqueDescription: {
        messages: defineMessages({
          label: {
            id: 'detailField.materialTechniqueDescription.label',
            defaultMessage: 'Medium',
          },
        }),
        field: 'collectionobjects_fineart:materialTechniqueDescription',
      },
    },
    groups: {
      group_description: {
        fields: [
          'materialTechniqueDescription',
          'material',
          'technique',
          'contentConcept',
          'measuredPart',
          'creditLine',
        ],
      },
    },
  },
};