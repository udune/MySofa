import { Color, DetailDescription, Material, ModelType, Size } from "@/types"

export const getColor = (color: Color): DetailDescription => {
    switch (color) {
      case "gray": {
        return { value: "회색", desc: "세련되고 실용적인 어디서나 잘 어울리는 그레이 색상입니다." }
      }
      case "beige": {
        return { value: "베이지색", desc: "거의 모든 종류의 장식과 어울리는 다재다능한 베이지 색상입니다." }
      }
      case "black": {
        return { value: "검은색", desc: "중후한 매력이 있고 무엇보다 멋있는 블랙 색상입니다." }
      }
      default: {
        return { value: "없음", desc: "정보가 없습니다." }
      }
    }
}

export const getMaterial = (material: Material): DetailDescription => {
    switch (material) {
      case "fabric": {
        return { value: "패브릭", desc: "부드러운 감촉과 아늑함을 연출하는 패브릭 재질입니다." }
      }
      case "leather": {
        return { value: "가죽", desc: "격조 있고 클래식한 느낌의 가죽 재질입니다."}
      }
      default: {
        return { value: "없음", desc: "정보가 없습니다." }
      }
    }
}

export const getSize = (size: Size): DetailDescription => {
    switch (size) {
      case "small": {
        return { value: "소형", desc: "작은 사이즈로 좁은 공간을 효율적으로 쓸 수 있습니다." }
      }
      case "large": {
        return { value: "대형", desc: "큰 사이즈 여러 명이 사용하기에 충분합니다." }
      }
      default: {
        return { value: "없음", desc: "정보가 없습니다." }
      }
    }
}

export const getModelType = (modelType: ModelType): DetailDescription => {
  switch (modelType) {
    case "a": {
      return { value: "a타입", desc: "" }
    }
    case "b": {
      return { value: "b타입", desc: "" }
    }
    default: {
      return { value: "없음", desc: "정보가 없습니다." }
    }
  }
}