# current_user=$(whoami)
# # 台中 mac mini 那台
# if [ "$current_user" == "riversense" ]; then
#     # DEV / QAT / Prod 環境指定
#     rm -rf slotFramework
#     git clone -b develop ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
# else
#     # Local 開發用
#     rm -rf slotFramework
#     git clone -b develop ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
# fi

cp -r ../build-templates ../../../../proj/
