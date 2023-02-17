interface Props {
  title: string;
}

export default function TabItem({ title }: Props): JSX.Element {
  return (
    <div className="group grow text-sm leading-5 py-4 font-bold text-dark-500 flex flex-col">
      <span className="flex justify-center">{title}</span>
      <span className="border-t-2 border-clear w-full group-hover:border-blue" />
    </div>
  );
}
