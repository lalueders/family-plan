import CheckedShoppingListItem from './CheckedShoppingListItem'
  export default {
      title: 'CheckedShoppingListItem',
      component: CheckedShoppingListItem
  }
        
  const Template = args => <CheckedShoppingListItem {...args} />
    
  export const Default = Template.bind({})
  Default.args = {}
            