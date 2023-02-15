interface Props {
  title: string;
}

export default function TabItem({ title }: Props): JSX.Element {
  return (
    <div className="grow border-[1px] text-sm leading-5 py-4 font-bold text-dark-500">
      <span>{title}</span>
    </div>
  );
}
