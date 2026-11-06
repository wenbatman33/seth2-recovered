current_user=$(whoami)
# 台中 mac mini 那台
if [ "$current_user" == "riversense" ]; then
    # DEV / QAT / Prod 環境指定
    rm -rf slotFramework
    echo "CI_COMMIT_BRANCH: $CI_COMMIT_BRANCH"
    echo "SLOTFRAMEWORK_BRANCH: $SLOTFRAMEWORK_BRANCH"
    if [ -n "$SLOTFRAMEWORK_BRANCH" ]; then
        git clone -b $SLOTFRAMEWORK_BRANCH ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
    else
        if [[ "$CI_COMMIT_BRANCH" =~ ^(feature/dev) ]]; then
            git clone -b feature/dev ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
        elif [[ "$CI_COMMIT_BRANCH" =~ ^(develop|feature) ]]; then
            git clone -b develop ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
        elif [[ "$CI_COMMIT_BRANCH" =~ ^(release) ]]; then
            git clone -b release ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
        else
            git clone -b master ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
        fi
    fi

    # 移動遊戲內的 build-templates 圖片
    echo "搬移資料夾 game/build-templates -> proj/build-templates"
    cp -r ./g1008/build-templates ../../proj/

    # 搬移圖片壓縮設定檔
    cp -r ./g1008/png-compress.json ../../proj/config/

else
    # Local 開發用
    rm -rf slotFramework
    git clone -b develop ssh://git@gitlab.riversense.tw:4022/egames/misa-bundles/slotFramework.git
fi
