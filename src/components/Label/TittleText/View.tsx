function ViewTitleText({ Title }: { Title: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#DB4444] rounded-sm w-[20px] h-[40px]"></div>
      <h2 className="font-semibold text-[#DB4444]">{Title || ""}</h2>
    </div>
  );
}

export default ViewTitleText;
