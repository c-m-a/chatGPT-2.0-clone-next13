'use client'
import useSWR from 'swr'
import Select from 'react-select'

const fetchModels = () => fecth('/api/getEngines').then(res => res.json())

export default function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels)
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  return <div className="my-2">
    <Select
      className="mt-2"
      isSearchable
      menuPosition="fixed"
      className={{
        control: state => 'bg-[#434654] border-[#434654]'
      }}
      options={models?.modelOptions}
      defaultValue={model}
      placeholder={model}
      onChange={e => setModel(e.value)}
    />
  </div>
}

